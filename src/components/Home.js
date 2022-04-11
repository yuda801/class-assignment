import { useState, useEffect } from 'react'


const Home = () => {
    const [groups, setGroups] = useState([])
    const [meetings, setMeetings] = useState([])
    const [selectedGroup, setSelectedGroup] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/devGroups')
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setGroups(data.data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/api/meetings')
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setMeetings(data.data)
            })
    }, [])

    return (
        <>
            <h1>HOME</h1>
            <label for="groups">Choose a group:</label>
            <select name="groups" id="groups"
                onChange={(e) => {
                    console.log(e.target.value)
                    setSelectedGroup(e.target.value)
                }}
            >
                {
                    groups.map(g => {
                        return (
                            <option value={g.groupID}>{g.gruopName}</option>
                        )
                    })
                }
            </select>


        </>
    )
}

export default Home;






// import { useState, useEffect } from 'react'


// function Home() {

//     const [groups, setGroups] = useState([])
//     const [selectedGroups, setSelectedGroups] = useState(-1)

//     useEffect(() => {
//         fetch('http://localhost:5000/api/meetings')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data.data)
//                 setGroups(data.data)
//             })
//     }, [])

//     const [newMeeting, setNewMeeting] = useState({
//         groupsID: null,
//         startingTime: '',
//         endingTime: '',
//         meetingDescription: '',
//         meetingRoom: ''
//     })

//     const handleInputChange = (e, name) => {
//         let inputValue = e.target.value
//         let tempNewMedicine = {
//             ...newMeeting,
//             [name]: inputValue
//         }

//         setNewMeeting(tempNewMedicine)
//     }

//     const handleSubmit = e => {
//         e.preventDefault()

//         createMedicine()
//     }

//     const createMedicine = () => {
//         // preper body data
//         let body = {
//             ...newMeeting
//         }
//         // post request
//         fetch('http://localhost:5000/api/meetings',
//             {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(body)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log('data')
//                 console.log(data)
//             })
//             .catch(err => {
//                 console.log('err')
//                 console.log(err)
//             })
//     }

//     const isEmptyString = str => {
//         return !!(str || false)
//     }

//     return (
//         <form >
//             <h3>Create new meeting</h3>
//             <label >groupsID:</label>
//             <br />
//             <input
//                 required
//                 type="text"
//                 onChange={(e) => handleInputChange(e, 'firstName')}
//                 value={newMedicine.firstName}
//             />
//             <br />
//             <label >Last name:</label>
//             <br />
//             <input type="text"
//                 required
//                 onChange={(e) => handleInputChange(e, 'lastName')}
//                 value={newMedicine.lastName}
//             />
//             <br />
//             <label >Phone:</label>
//             <br />
//             <select value={selectedCompany}
//                 onChange={(e) => {
//                     console.log(e.target.value)
//                     setSelectedCompany(e.target.value)
//                 }}
//             >
//                 {
//                     companies.length > 0 &&
//                     companies.map(c => {
//                         return (
//                             <option value={c.id}>{c.name}</option>
//                         )
//                     })
//                 }
//             </select>

//             <button onClick={handleSubmit}>Create</button>
//         </form>
//     );
// }

// export default Home;