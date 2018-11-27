function replyOneAdvance(username,id){
    $("#reply_content").parent(".cell");
    replyContent = $("#reply_content");
    oldContent = replyContent.val();
    prefix = "@" + username + " #"+id+" ";
    newContent = "";
    if(oldContent.length > 0){
        if (oldContent != prefix) {
            newContent = oldContent + "\n" + prefix;
        }
    } else {
        newContent = prefix;
    }
    replyContent.focus();
    replyContent.val(newContent);
    moveEnd($("#reply_content"));
}

(function() {
    $('.cell').each(
    function(i,e){
    var id=e.id;
    e.innerHTML=e.innerHTML.replace(/replyOne\((.+)\)/,"replyOneAdvance($1,'"+id+"')")
    });
    
    $('.reply_content').each(function(i,e){e.innerHTML=e.innerHTML.replace(/(#r_\d+)/g,"<a href='$1'>$1</a>")});    
})();