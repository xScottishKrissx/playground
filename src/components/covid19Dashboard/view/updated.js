export default function Updated(props) {

    const dateOptions = {
        hour:"numeric", 
        minute:"numeric", 
        day:"numeric", 
        year: 'numeric', 
        month: 'long', 
    }
    let myDate = new Date(props.updated)
    const joinDate = myDate.toLocaleDateString('en-GB', dateOptions)
    return joinDate
}
