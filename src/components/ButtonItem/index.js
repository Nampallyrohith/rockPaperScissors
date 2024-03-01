import {List, Button, Image} from './styledComponents'

const ButtonItem = props => {
  const {list, updateChoiceImage} = props
  const {id, imageUrl} = list
  return (
    <List>
      <Button
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={() => updateChoiceImage(id)}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </List>
  )
}

export default ButtonItem
