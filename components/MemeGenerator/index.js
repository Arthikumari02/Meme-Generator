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
    meme: null,
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

  onChangeFontSizeInput = event => {
    this.setState({fontSize: event.target.value})
  }

  handleGenerate = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    this.setState({
      meme: {
        imageUrl,
        topText,
        bottomText,
        fontSize,
      },
    })
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, meme} = this.state

    return (
      <BgContainer data-testid="meme">
        <Form onSubmit={this.handleGenerate}>
          <Heading>Meme Generator</Heading>
          <Label>
            Image URL
            <Input
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={this.onChangeImageInput}
              placeholder="Enter the Image URL"
            />
          </Label>
          <Label>
            Top Text
            <Input
              type="text"
              name="topText"
              value={topText}
              onChange={this.onChangeTopTextInput}
              placeholder="Enter the Top Text"
            />
          </Label>
          <Label>
            Bottom Text
            <Input
              type="text"
              name="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomInput}
              placeholder="Enter the Bottom Text"
            />
          </Label>
          <Label>
            Font Size
            <Select
              name="fontSize"
              value={fontSize}
              onChange={this.onChangeFontSizeInput}
            >
              {fontSizesOptionsList.map(option => (
                <Option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </Option>
              ))}
            </Select>
          </Label>
          <GenerateButton type="submit">Generate</GenerateButton>
        </Form>
        {meme && (
          <MemeContainer data-testid="meme" backgroundImage={meme.imageUrl}>
            <MemeText fontSize={meme.fontSize} position="top">
              {meme.topText}
            </MemeText>
            <MemeText fontSize={meme.fontSize} position="bottom">
              {meme.bottomText}
            </MemeText>
          </MemeContainer>
        )}
      </BgContainer>
    )
  }
}

export default MemeGenerator
