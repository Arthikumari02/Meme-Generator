import {Component} from 'react'
import {
  BgContainer,
  Heading,
  Form,
  Label,
  Input,
  Select,
  Option,
  GenerateButton,
  MemeText,
  MemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    shouldShowMeme: false,
  }

  onChangeImageInput = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomInput = event => {
    this.setState({bottomText: event.target.value})
  }

  handleGenerate = event => {
    event.preventDefault()
    this.setState({shouldShowMeme: true})
  }

  onChangeFontSizeInput = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, shouldShowMeme} = this.state

    return (
      <BgContainer>
        <Heading>Meme Generator</Heading>
        <Form>
          <Label htmlFor="background-url">Image URL</Label>
          <Input
            id="background-url"
            type="text"
            value={imageUrl}
            onChange={this.onChangeImageInput}
            placeholder="Enter the Image URL"
          />
          <Label htmlFor="top-text">Top Text</Label>
          <Input
            id="top-text"
            type="text"
            value={topText}
            onChange={this.onChangeTopTextInput}
            placeholder="Enter the Top Text"
          />
          <Label htmlFor="bottom-text"> Bottom Text</Label>
          <Input
            id="bottom-text"
            type="text"
            value={bottomText}
            onChange={this.onChangeBottomInput}
            placeholder="Enter the Bottom Text"
          />
          <Label htmlFor="select-element">Font Size</Label>
          <Select
            id="select-element"
            value={fontSize}
            onChange={this.onChangeFontSizeInput}
          >
            {fontSizesOptionsList.map(option => (
              <Option key={option.optionId} value={option.optionId}>
                {option.displayText}
              </Option>
            ))}
          </Select>
          <GenerateButton type="button" onClick={this.handleGenerate}>
            Generate
          </GenerateButton>
        </Form>
        {shouldShowMeme && (
          <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
            <MemeText fontSize={fontSize} position="top">
              {topText}
            </MemeText>
            <MemeText fontSize={fontSize} position="bottom">
              {bottomText}
            </MemeText>
          </MemeContainer>
        )}
      </BgContainer>
    )
  }
}

export default MemeGenerator
