export const getSessionCookie = (): {token:string, refreshToken: string, userNickname:string} | undefined => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('workoutTrackerAppSession'))
    if(cookie){
        return JSON.parse(cookie.split('workoutTrackerAppSession=')[1]);
    }else{
        return undefined
    }
}