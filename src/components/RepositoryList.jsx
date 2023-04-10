import { FlatList } from "react-native";
import repositories from "../../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
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
