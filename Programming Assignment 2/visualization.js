var lesmis = echarts.init(document.getElementById('lesmis'));
// lesmis.showLoading();

// console.log(data.nodes);
// console.log(data.links);
data.nodes.forEach(function (node) {
  node.name = node.label;
  node.draggable = true;
  node.value = 0;
  // console.log(node.name);
});

data.links.forEach(function (link) {
  data.nodes[link.source].value += link.value;
  data.nodes[link.target].value += link.value;
  data.nodes[link.source].symbolSize = data.nodes[link.source].value;
  data.nodes[link.target].symbolSize = data.nodes[link.target].value;
});

data.nodes.forEach(function (node) {
  node.symbolSize = 5 + node.value * 20 / 160; 
})

var option = {
  title: {
    text: 'Les Miserables',
    subtext: 'Default layout',
    top: 'bottom',
    left: 'right'
  },
  animation: false,
  tooltip: {},
  series: [
    {
      name: 'Coappearance network in Les Miserables',
      type: 'graph',
      layout: 'force',
      data: data.nodes,
      links: data.links,
      roam: true,
      label: {
        normal: {
          position: 'right'
        }
      },
      force: {
        repulsion: 100
      }
    }
  ]
};

lesmis.setOption(option);