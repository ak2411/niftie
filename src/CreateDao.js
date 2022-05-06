import {Image, Button, InputGroup, FormControl, Container, ProgressBar, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { abi } from "./abi";

function Success() {
    let navigate = useNavigate(); 
    const handleClick = () =>{ 
        navigate(process.env.PUBLIC_URL + "/DIG/home")
    }
    return(<div>
        <h2>You have created a DAO for DIG game!</h2>
        Click open to navigate to your DAO.
        <Button className="custom-button" onClick={handleClick}>Open</Button>
    </div>);
}



function CreateDao(pageProp) {
    const [createdDAO, setCreatedDAO] = useState(false);

    const {
      active,
      activate,
      chainId,
      account,
      library: provider,
    } = useWeb3React();

    async function execute() {
        setCreatedDAO(true);
        if (active) {
            const signer = provider.getSigner();
            const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
            const contract = new ethers.Contract(contractAddress, abi, signer);
            try {
                
                await contract.store(42);
              } catch (error) {
                console.log(error);
              }
        } else {
            console.log("Please install MetaMask");
        }
    }
    
    return (
        <div className="game-dashboard" style={{display:"flex", gap:"10px"}}>
            {/* pageProp.hasMetamask && active */}
            {(true) ? (createdDAO) ? (<Success />) : (
                <><h2>Create DAO</h2>
                <InputGroup>
                    <InputGroup.Radio aria-label="Radio button for following text input" />
                    Import information from existing discord. </InputGroup>
                <Card style={{padding: "10px"}}>
                    <Card.Title>Basic information</Card.Title>
                    <Card.Body>
                    <InputGroup>
                    <InputGroup.Text id="basic-addon1">DAO Name: </InputGroup.Text>
                    <FormControl
                placeholder="name"
                aria-label="name"
                aria-describedby="name"
            /></InputGroup>
                    <InputGroup>
                    <InputGroup.Text id="basic-addon1">DAO Size: </InputGroup.Text>
                    <FormControl
                placeholder="Size"
                aria-label="Size"
                aria-describedby="size"
            /></InputGroup>
                <InputGroup><InputGroup.Text id="basic-addon1">Number of admins </InputGroup.Text>
                        <FormControl
                    placeholder="admin"
                    aria-label="admin"
                    aria-describedby="admin"
                /></InputGroup>
                <InputGroup><InputGroup.Text id="basic-addon1">% of votes to pass: </InputGroup.Text>
                        <FormControl
                    placeholder="votes"
                    aria-label="votes"
                    aria-describedby="votes"
                /></InputGroup>
                                    </Card.Body>

                </Card>
                <Card  style={{padding: "10px"}}>
                    <Card.Title>Entry Requirements</Card.Title>
                    <Card.Body>
                    <InputGroup>
                    <InputGroup.Checkbox aria-label="Radio button for following text input" />
                    Require new members join your DAO after pass the voting%? </InputGroup>
                    <InputGroup>
                    <InputGroup.Checkbox aria-label="Radio button for following text input" />
                    Allow admins to admit new members directly?</InputGroup>
                    </Card.Body>
                </Card>
                <div style={{display:"flex", gap:"10px"}}>
                <Button variant="primary" size="lg" className="custom-button" style={{backgroundColor:"grey"}}onClick={() => execute()}>
                    Cancel
                </Button>
                <Button variant="primary" size="lg" className="custom-button" onClick={() => execute()}>
                    Create DAO
                </Button>
                </div>
                </>
            ):("Please Connect a MetaMask Wallet!")}
        </div>
    );
  }
  
  export default CreateDao;