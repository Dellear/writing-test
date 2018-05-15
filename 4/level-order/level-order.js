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
    console.log(levelOrderTraversal(node).join(' -> '));
    document.getElementById("detail").innerHTML = '深度优先：' + levelOrderTraversal(node).join(' -> ');
}

/**
 * 按深度遍历
 * 
 * @param {*} node 
 * @return 遍历排序的数组
 */
var levelOrderTraversal = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }

    var stack = [];
    var temp = [];
    stack.push(node);
    temp.push(node.id);
    while (stack.length !== 0) {
        node = stack.shift();
        if (node.children && node.children[0]) {
            stack.push(node.children[0]);
            temp.push(node.children[0].id);
        }
        if (node.children && node.children[1]) {
            stack.push(node.children[1]);
            temp.push(node.children[1].id);
        }
    }

    return temp;
}