$(document).ready(function() {

  $.getJSON("history_net_data.json", function(data) {

    var container = document.getElementById('mynetwork');
    console.log(data);

    var options = {
        // configurePhysics:true,
        edges: {
            style: 'arrow'
        }
    };

    var network = new vis.Network(container, data, options);

  })
});
