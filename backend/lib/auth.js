module.exports = {
    isOwner:function(request, response) {
        console.log("isOwner : ", request.user);
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = `
            <div class="container" style="text-align: center">
                <a style="color: green" href="/auth/login">login</a> |
                <a style="color: green" href="/auth/register">Register</a> |
                <a style="color: green" href="/auth/google">login with google</a>
            </div>    
            `
        if (this.isOwner(request, response)) {
            console.log("isOwner");
            authStatusUI = `
            <div class="container">
                <div style="color: green">${request.user.nickname}</div>
                | 
                <a style="color: green href="/auth/logout">logout</a>
            </div>`;
        }
        return authStatusUI;
    }
}