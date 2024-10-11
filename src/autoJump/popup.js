const AUTO_JUMP_SUPPORT_URL = [
    'https://link.zhihu.com',
    'https://link.juejin.cn'
]


function autoJump() {
    const url = new URL(window.location.href);
    const protocol = url.protocol; 
    const host = url.host; 
    const path  = `${protocol}//${host}`;  
    console.log(path)
    if (!AUTO_JUMP_SUPPORT_URL.includes(path)) { 
        return
    }    
     
    const params = url.searchParams;  
    const target = params.get('target'); 
    window.location.replace(target ); 
}
autoJump()