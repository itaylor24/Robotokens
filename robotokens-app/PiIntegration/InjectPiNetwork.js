import React from 'react'
import styled from 'styled-components'

const InjectPiNetwork = () => {
    
  const AuthenticateUser = () => {
    const scopes = ['payments'];
    function onIncompletePaymentFound(payment) { /* ... */ };
    Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth) {
    console.log(`Hi there! You're ready to make payments!`);
    }).catch(function(error) {
    console.error(error);
    });
  }

// Below is example of payment metadata
  const sendLoveToRoboCreator = ({ RoboName }) => {
    Pi.createPayment({
        amount: 10,
        // An explanation of the payment - will be shown to the user:
        memo: `You will send 10 PI for ${RoboName}'s creator as a show of appreciation`, // e.g: "Digital kitten #1234",
        // An arbitrary developer-provided metadata object - for your own usage:
    }, {
        onReadyForServerApproval: function(paymentId) { /* ... */ },
        onReadyForServerCompletion: function(paymentId, txid) { /* ... */ },
        onCancel: function(paymentId) { /* ... */ },
        onError: function(error, payment) { /* ... */ },
    });
  
  }

  const showAppreciation = ({RoboName}) =>{
    let PaymentData = {
        amount: 10,
        memo: `You will send 10 PI for ${RoboName}'s creator as a show of appreciation`,
        metadata: Object,
      };
      
    let PaymentDTO = {
        // Payment data:
        identifier: string, // The payment identifier
        user_uid: string, // The user's app-specific ID
        amount: number, // The payment amount
        memo: string, // A string provided by the developer, shown to the user
        metadata: Object, // An object provided by the developer for their own usage
        to_address: string, // The recipient address of the blockchain transaction
        created_at: string, // The payment's creation timestamp
        
        // Status flags representing the current state of this payment
        status: {
          developer_approved: boolean, // Server-Side Approval
          transaction_verified: boolean, // Blockchain transaction verified
          developer_completed: boolean, // Server-Side Completion
          cancelled: boolean, // Cancelled by the developer or by Pi Network
          user_cancelled: boolean, // Cancelled by the user
        },
        
        // Blockchain transaction data:
        transaction: null | { // This is null if no transaction has been made yet
          txid: string, // The id of the blockchain transaction
          verified: boolean, // True if the transaction matches the payment, false otherwise
          _link: string, // A link to the operation on the Blockchain API
        },
      }
      
    //   Pi.createPayment(paymentData: PaymentData, callbacks: PaymentCallbacks): void;
  }

  return (
    <>
    <div>
    <script src="https://sdk.minepi.com/pi-sdk.js"></script>
    <script>{Pi.init({ version: "2.0", sandbox: true })}</script>
    </div>
    </>
  )
}

export default InjectPiNetwork

// PAYMENT METADATA EXAMPLE:
// {
//     // Payment data:
//     "identifier": string, // The payment identifier
//     "user_uid": string, // The user's app-specific ID
//     "amount": number, // The payment amount
//     "memo": string, // A string provided by the developer, shown to the user
//     "metadata": Object, // An object provided by the developer for their own usage
//     "to_address": string, // The recipient address of the blockchain transaction
//     "created_at": string, // The payment's creation timestamp
    
//     // Status flags representing the current state of this payment
//     "status": {
//       "developer_approved": boolean, // Server-Side Approval
//       "transaction_verified": boolean, // Blockchain transaction verified
//       "developer_completed": boolean, // Server-Side Completion
//       "cancelled": boolean, // Cancelled by the developer or by Pi Network
//       "user_cancelled": boolean, // Cancelled by the user
//     },
    
//     // Blockchain transaction data:
//     "transaction": null | { // This is null if no transaction has been made yet
//       "txid": string, // The id of the blockchain transaction
//       "verified": boolean, // True if the transaction matches the payment, false otherwise
//       "_link": string, // A link to the operation on the Blockchain API
//     },
//   };