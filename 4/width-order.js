var setting = {
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onClick: onClick
    }
};

var widthOrderList = [];

var zNodes = [
    { id: 'a', pId: null, name: 'a' },
    { id: 'b', pId: 'a', name: 'b' },
    { id: 'c', pId: 'a', name: 'c' },
    { id: 'd', pId: 'b', name: 'd' },
    { id: 'e', pId: 'b', name: 'e' },
    { id: 'f', pId: 'c', name: 'f' },
    { id: 'g', pId: 'c', name: 'g' },
    { id: 'h', pId: 'd', name: 'h' },
    { id: 'i', pId: 'd', name: 'i' },
    { id: 'j', pId: 'e', name: 'j' },
    { id: 'k', pId: 'f', name: 'k' },
    { id: 'l', pId: 'g', name: 'l' },
    { id: 'm', pId: 'g', name: 'm' },

];

$(document).ready(function () {
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    treeObj.expandAll(true);
});


function onClick(e, treeId, node) {
    widthOrderList = [node.id];
    widthOrder(node);
    document.getElementById("detail").innerHTML = '宽度优先：' + widthOrderList.join(' -> ');
}

/**
 * 按宽度优先遍历
 * 
 * @param {*} node 
 * @return 遍历排序的数组
 */
var widthOrder = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    console.log(widthOrderList);

    if (node.children && node.children[0]) {
        widthOrderList.push(node.children[0].id);
        widthOrder(node.children[0]);
    }

    if (node.children && node.children[1]) {
        widthOrderList.push(node.children[1].id);
        widthOrder(node.children[1]);
    }
}