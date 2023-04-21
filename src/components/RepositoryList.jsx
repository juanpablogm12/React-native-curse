import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepository";

const RepositoryList = () => {

  const {repositories} = useRepositories()
  console.log(repositories);
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    ></FlatList>
  );
};

export default RepositoryList;
