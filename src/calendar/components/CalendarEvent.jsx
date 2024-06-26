

export const CalendarEvent = ({ event }) => {

    const { title, user } = event;
    let username = '';
    if(user){
        username = user.name ?? '';
    }
    return (
        <>
            <strong>{ title }</strong>
            <span> - { username }</span>
        </>
    )
}
