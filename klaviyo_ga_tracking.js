(function() {    
    // Handle dataLayer events
    function handleDataLayerPush(event) {        

        var klaviyo = window.klaviyo || [];

        var KLAVIYO_EVENT_KEY_MAP = {
            "view_item": "Viewed Product",
            "add_to_cart": "Added to Cart",
            "begin_checkout": "Started Checkout",
            "purchase": "Placed Order"
        }

        var eventName;
        var ecommerceItems;
        var isGA4Event = false;
        var isGAEvent = false;
        
        // Validate the main formatting expected for standard GA4 ecommerce events        
        try {
            eventName = event.event;
            ecommerceItems = event.ecommerce.items;
            isGA4Event = true; 
        } catch (err) {}

        // Validate the main formatting expected for standard GA ecommerce events           
        if(!isGA4Event) {
            try {
                if(event[0] == "event"){
                    eventName = event[1];
                    ecommerceItems = event[2]['items'];
                    isGAEvent = true; 
                }                
            } catch (err) {}
        }                

        // Track select ecommerce events assuming standard GA4 ecommerce event formatting. 
        if (eventName && ecommerceItems) {
            
            if (eventName == "view_item") {
                ecommerceItems[0].$value = ecommerceItems[0].price;                
                klaviyo.track(KLAVIYO_EVENT_KEY_MAP[eventName], ecommerceItems[0]);                
            } else if (eventName == "add_to_cart") {
                ecommerceItems[0].$value = ecommerceItems[0].price;
                klaviyo.track(KLAVIYO_EVENT_KEY_MAP[eventName], ecommerceItems[0]);                
            } else if (eventName == "begin_checkout" || eventName == "purchase") {
                var checkoutValue = 0;
                var checkoutData = {};

                for (var i = 0; i < ecommerceItems.length; i++) {
                    checkoutValue += ecommerceItems[i].price * ecommerceItems[i].quantity;
                };
                checkoutData.$value = parseFloat(checkoutValue.toFixed(2));
                checkoutData.Items = ecommerceItems;
                klaviyo.track(KLAVIYO_EVENT_KEY_MAP[eventName], checkoutData);                
            }
        }
    }
    
    // Override the push method of the dataLayer array to listen for push events
    window.dataLayer.push = function() {
        // Capture the arguments passed to the original push method
        var args = Array.prototype.slice.call(arguments);
        // Call the original push method to ensure the dataLayer still functions as expected
        Array.prototype.push.apply(window.dataLayer, args);
        // Extract the event object from the arguments
        var event;    
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === 'object') {
                event = args[i];
                break;
            }
        }
        // Handle the dataLayer push event
        if (event) {
            handleDataLayerPush(event);
        }
    };
    
})();
