import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 0px 6px 16px 8px #7e858e;
  padding: 50px;
  gap: 60px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
`

export const Form = styled.form`
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`

export const Option = styled.option``

export const Label = styled.label`
  color: #7e858e;
  font-family: 10px;
  font-family: 'Roboto';
`
export const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 17px;
  color: #1e293b;
  border: 1px solid #d7dfe9;
  outline: none;
  border-radius: 4px;
  padding-left: 10px;
`
export const Select = styled.select`
  width: 300px;
  height: 40px;
  font-size: 17px;
  color: #1e293b;
  border: 1px solid #d7dfe9;
  outline: none;
  border-radius: 4px;
  padding-left: 10px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px;
`

export const MemeContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: auto;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
  margin: 20px;
  ${props =>
    props.position === 'top'
      ? 'align-self: flex-start;'
      : 'align-self: flex-end;'}
`
