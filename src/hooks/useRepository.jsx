import { useState, useEffect } from "react"

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)
    
    const fetchRepositories = async () => {
      const response = await fetch('http://localhost:5000/api/repositories')
      const json = await response.json()
      setRepositories(json)
    }
    
    useEffect(()=> {
      fetchRepositories()
    },[])  
  
    const repositoriesNodes = repositories 
    ? repositories.edges.map(edge => edge.node)
    : []
  
    return {repositories: repositoriesNodes}
  }

  export default useRepositories