Klaviyo tracking of Google Analytics e-commerce events.

**Configuration**

1. Create a new Tag in GTM and select the 'Klaviyo Tracking' Tag.
2. Fill your Klaviyo <a href="https://help.klaviyo.com/hc/en-us/articles/115005062267#h_01HRFPP8R1AEVQ744SE33FQTEC">'Public API Key / Site ID'</a> into the 'Klaviyo Account ID' field. 
3. Assign the trigger 'Initialization - All pages' as the trigger for the Tag. 

<img width="1440" alt="image" src="https://github.com/FrantisekFr/test/assets/96049514/0cedb80a-d5dd-4eb3-a46c-1d95e82eaa15">

4. Save & Submit the changes.

As a result, you will be able to launch Klaviyo Sign Up forms onto your site and the following Klaviyo events will be tracked:
- Active on Site
- Viewed Product
- Added to Cart
- Started Checkout
- Placed Order

Please, see the following Klaviyo <a href="https://developers.klaviyo.com/en/docs/guide_to_integrating_a_platform_without_a_pre_built_klaviyo_integration#about-javascript-and-server-side-event-apis">documentation</a> for further information about these events. 

These events will be tracked based of the following Google Analytics events: 
- view_item
- add_to_cart
- begin_checkout
- purchase

For correct tracking of the Klaviyo events, the tracking of your GA events must satisfy the standard Google Analytics event naming & formatting. Both the GA and GA4 formats are supported. 

Please see the following GA <a href="https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag">documentation</a> for detailed information. 

Note: Klaviyo events will only be tracked for identified users. Please see the following <a href="https://help.klaviyo.com/hc/en-us/articles/115005076767#h_01HADAYAACVVC4BXQ0ES5Y50TC">article</a> for detailed information. 

For further information about how you can customise the onsite tracking of Klaviyo events using GTM, please see the following <a href="https://medium.com/klaviyo-developers/solution-recipe-18-send-google-ecommerce-events-to-klaviyo-via-google-tag-manager-eb03040e1814">article</a>. 
