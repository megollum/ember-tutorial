import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            href: 'about',
            linkText: 'About Us'
        },
        {
            href: 'contact',
            linkText: 'Contact Us'
        }]
    }
});
