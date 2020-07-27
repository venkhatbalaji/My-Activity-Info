import cookie from 'react-cookies';

export default {
    getUserDetails: () => {
        const content = cookie.load('SD') || '';
        const userDetails =  content.split('|').filter((a) => a.startsWith('UN')).map((a) => a.split('=')).map((a) => a[1]);
        const userName = !userDetails ? null : userDetails[0];
        return userName; 
    },

    getLoggedInDetails: () =>{
        const content = cookie.load('SD') || '';
        const loggedIn = content.split('|').filter((a) => a.startsWith('IL')).map((a) => a.split('=')).map((a) => a[1]);
        const isloggedIn = !loggedIn ? null : loggedIn[0];
        return (isloggedIn === '1');
    },

    updateLogInDetails: (userName, isLoggedIn) =>{
         if(userName && isLoggedIn){
             const cookieValue = `IL=${isLoggedIn === true ? "1" : "0" }|UN=${userName.toLowerCase()}`;
             console.log(cookieValue);
             cookie.save('SD',cookieValue);
         } 
    }

};