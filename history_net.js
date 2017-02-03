var container = document.getElementById('mynetwork');

var options = {
    // configurePhysics:true,
    edges: {
        style: 'arrow'
    }
};

var network = new vis.Network(container, data, options);
