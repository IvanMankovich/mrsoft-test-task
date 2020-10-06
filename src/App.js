import React, {useState} from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Main/Modal';
import { Loading } from './components/Main/Loading';

const StyledApp = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
`;

const App = React.memo(props => {
    const [inputValue, setInputValue] = useState(''),
          [checkboxValue, setCheckboxValue] = useState(false),
          [resultArray, setResultArray] = useState(null),
          [isModalOpen, setModalOpen] = useState(false),
          [isLoading, setLoading] = useState(false);

    const handleChangeInputValue = value => {
        setInputValue(value);
    }

    const handleChangeCheckboxValue = () => {
        setCheckboxValue(!checkboxValue);
    }

    const handleFilterByLengthClick = e => {
        e.preventDefault();
        getResultFilteredByLength();
    }

    const handleFilterBySubstringClick = e => {
        e.preventDefault();
        checkboxValue ? getCaseSensitiveSubstr() : getCaseInsensitiveSubstr();
    }

    const handleClickOpenModal = e => {
        setModalOpen(!isModalOpen);
    }

    const getResultFilteredByLength = () => {
      setLoading(true);
      getData().then(
          data => data.filter(word => word.length > Number(inputValue))
      ).then(
          result => {setResultArray(result)}
      ).then(
        () => {setLoading(false)}
      ).catch(
        (err) => {
            alert(err.message);
            setLoading(false);
          }
    )
  }

  const getCaseSensitiveSubstr = () => {
      setLoading(true);
      getData().then(
          data => data.filter(word => word.indexOf(inputValue) > -1)
      ).then(
          result => {setResultArray(result)}
      ).then(
        () => {setLoading(false)}
      ).catch(
        (err) => {
            alert(err.message);
            setLoading(false);
          }
    )
  }

  const getCaseInsensitiveSubstr = () => {
      setLoading(true);
      getData().then(
          data => data.filter(item => item.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) > -1)
      ).then(
          result => {setResultArray(result)}
      ).then(
        () => {setLoading(false)}
      ).catch(
          (err) => {
              alert(err.message);
              setLoading(false);
            }
      )
  };

    async function getData() {
        // used local
        // let response = await fetch('http://localhost:3000/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
    
        // used remote
        let response = await fetch('https://mrsoft-test-task-api.herokuapp.com/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json();
        return data.data;
    }

    return (
        <StyledApp>
            <Header />
            <Main 
                inputValue={inputValue} 
                checkboxValue={checkboxValue} 
                resultArray={resultArray}
                handleChangeInputValue={handleChangeInputValue} 
                handleChangeCheckboxValue={handleChangeCheckboxValue} 
                handleFilterByLengthClick={handleFilterByLengthClick} 
                handleFilterBySubstringClick={handleFilterBySubstringClick} 
              />
            <Footer handleClickOpenModal={handleClickOpenModal} />
            {isModalOpen ? <Modal handleClickOpenModal={handleClickOpenModal} /> : null}
            {isLoading ? <Loading /> : null}
        </StyledApp>
    );
})

export default App;
