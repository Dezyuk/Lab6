const fullpageApi = $.fn.fullpage;

function getHash() {
    return window.location.hash;
}
function setHash(value) {
    window.location.hash = value;
}
$('.fullpage').fullpage({
	anchors:['NY1', 'NY2', 'NY3']
});
$('.fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage'],
    lockAnchors: true,
    onLeave: function (origin, destination, direction, trigger) {
        $('.section[data-anchor="' + origin.anchor + '"]').removeClass('vis');
        let destinationAnchor = $('[data-index="' + destination.index + '"]').attr('data-anchor');
        setHash(destinationAnchor);
    },
    afterLoad: function (origin, destination, direction, trigger) {
        $('.section[data-anchor="' + destination.anchor + '"]').addClass('vis');
    }
});

$('[data-section]').on('click', function () {
    fullpageApi.moveTo($(this).attr('data-section'));
});
