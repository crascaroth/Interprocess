import { useContext } from 'react'
import Header from "../../Components/Header/Header.js"
import ListUsers from "../../Components/ListUsers/ListUsers.js"
import SearchUser from "../../Components/SearchUser/SearchUser.js"
import Context from '../../GlobalState/Context'


const MainPage = () => {

       const { states, setters, requests } = useContext(Context)

    return (
        <div>
            <Header/>
            <SearchUser/>
            <ListUsers/>            
        </div>
    )
}

export default MainPage