var setting = {
    data: {
        simpleData: {
            enable: true
        }
    }
};

var zNodes =[
    { id:'a', pId: null, name: 'a'},
    { id:'b', pId: 'a', name: 'b'},
    { id:'c', pId: 'a', name: 'c'},
    { id:'d', pId: 'b', name: 'd'},
    { id:'e', pId: 'b', name: 'e'},
    { id:'f', pId: 'c', name: 'f'},
    { id:'g', pId: 'c', name: 'g'},
    { id:'h', pId: 'd', name: 'h'},
    { id:'i', pId: 'd', name: 'i'},
    { id:'j', pId: 'e', name: 'j'},
    { id:'k', pId: 'f', name: 'k'},
    { id:'l', pId: 'g', name: 'l'},
    { id:'m', pId: 'g', name: 'm'},

];

$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
    treeObj.expandAll(true);
});
