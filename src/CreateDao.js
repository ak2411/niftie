import {Image, Button, Container, ProgressBar, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/game-bg.png';
import './css/GameDashboard.css';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { abi } from "./abi";


function CreateDao(pageProp) {
  
    const {
      active,
      activate,
      chainId,
      account,
      library: provider,
    } = useWeb3React();

    async function execute() {
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
        <div className="game-dashboard">
            {(pageProp.hasMetamask && active) ? (
                <Button variant="primary" size="lg" className="custom-button" onClick={() => execute()}>
                    Create DAO
                </Button>
            ):("Please Connect a MetaMask Wallet!")}
        </div>
    );
  }
  
  export default CreateDao;

