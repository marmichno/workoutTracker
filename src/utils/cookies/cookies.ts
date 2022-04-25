export const getSessionCookie = (): any | undefined => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('workoutTrackerAppSession'));
    if(cookie){
        return JSON.parse(cookie.split('workoutTrackerAppSession=')[1]);
    }else{
        return {}
    }
}