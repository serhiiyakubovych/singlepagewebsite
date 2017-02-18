;(function() {
    function initPage() {
        document.addEventListener('click', hideMessageForm);
    }
    function initMap() {
        var uluru = {lat: 50.446159, lng: 30.515426};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    function hideMessageForm(event) {
        /**
         * 'event.target' have to be a hide form button
         * then 'event.target.parentNode' is a box containing a message form
         */
        if ( !event.target.classList.contains("hide-form-button") ||
             !event.target.parentNode.classList.contains("message-box") ) {
            return;
        }
        event.target.parentNode.classList.toggle("hide-form");
    }

    window.addEventListener("DOMContentLoaded", initPage);
    window.RapidSinglePage = {
        initMap: initMap
    };
}());