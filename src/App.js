import React, {Component} from 'react';
import {Panel, PanelType} from 'office-ui-fabric-react';
import {toast} from 'react-toastify';
import {ToastContainer} from 'react-toastify';
import 'sanitize.css/sanitize.css';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Portal from './Portal';

//const cerrar = () => <span>Cerrar</span>
const toastContainer = () => {
    return (
        <div >
            <ToastContainer 
                closeOnClick={false}
                id="1" 
                key="uno" 
                style={{ zIndex: '2147483647' }} />
        </div>        
    )
}

class App extends Component {
    state = { open: false }


    
    dismissAll = () =>  {
        console.log("dismissAll");
        toast.dismiss()
    };

    //notify = () => this.toastId = toast("Funciona?", { autoClose: false, onClose: this.dismissAll, closeButton: cerrar() });
    notify = () => this.toastId = toast("Funciona...", { autoClose: false, onClose: () => { console.log("Cerrando...")}});

    dismiss = () =>  toast.dismiss(this.toastId);


    render() {
        
    return (
            <div className="App">
                <Portal>
                    {toastContainer()}
                </Portal>

                <button
                    onClick={() => {
                    //toast("Default Notification !");
                    this.setState({ open: true });
                }}>Toast fuera panel</button>
                {
                    this.state.open && (
                    <Portal>
                        <Panel 
                            isOpen={true} 
                            type={PanelType.smallFixedFar} 
                            hasCloseButton={false}
                            onDismiss={e => e.preventDefault()}
                            >
                            
                            <div>
                                <button onClick={() => {
                                    this.setState({ open: false })
                                }}>Cerrar Panel</button>
                                <button onClick={this.notify}>Notify</button>
                                <button onClick={this.dismiss}>Dismiss</button>
                                <button onClick={this.dismissAll}>Dismiss All</button>
                            </div>
                            <form id="DyeMachineForm" className="form" onSubmit={() => {}}>
                                FORM
                                <button
                                onClick={() => {
                                toast.error("On panel notification!")
                                }}>Toast en form</button>
                            </form>
                        </Panel>
                    </Portal>)
                }
            </div>
        );
    }
}

export default App;
