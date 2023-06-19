const styles = {
    modal: {
        box: {
            fontFamily: 'Yekan Bakh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            p: 4,
            direction: 'rtl',
            padding: '0px',
            borderRadius: '5px',
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
        },
        previousBox: {
            fontFamily: 'Yekan Bakh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            p: 4,
            direction: 'rtl',
            padding: '0px',
            borderRadius: '5px',
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'white'
        },
        fileChecker: {
            fontFamily: 'Yekan Bakh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            p: 4,
            direction: 'rtl',
            padding: '0px',
            borderRadius: '5px',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center'
        },
        errorMessage: {
            color: 'red'
        },
        typography: {
            header: {
                fontFamily: 'yekan bakh',
                backgroundColor: '#bf0202',
                color: 'white',
                padding: '0.5rem 1rem 0.5rem'
            }
        },
        button: {
            color: 'black',
            borderColor: 'black',
            paddingLeft: '0px',
            paddingRight: '0px',
            justifyContent: 'end'
        }
    },
    previewIcon: {
        box: {
            width: '200px',
            display: 'flex',
            justifyContent: 'center'
        }
    },
    previewButtons: {
        startIcon: {
            width: '1rem',
            marginLeft: '0.7rem'
        },
        button: {
            color: 'white',
            fontFamily: 'Yekan Bakh',
            bgcolor: 'black',
            borderColor: 'black',
            paddingLeft: '5px',
            paddingRight: '5px',
            marginLeft: '5px',
            ":hover": {
                bgcolor: '#2e2e2e',
                borderColor: 'black'
            }
        }
    },
    rename: {
        buttons: {
            buttonOne: {
                color: 'white',
                fontFamily: 'Yekan Bakh',
                bgcolor: '#A81A11',
                borderColor: '#A81A11',
                paddingLeft: '5px',
                paddingRight: '5px',
                marginLeft: '0.5rem',
                ":hover": {
                    bgcolor: '#db2418',
                    borderColor: '#db2418',
                }
            },
            buttonTwo: {
                color: '#A81A11',
                fontFamily: 'Yekan Bakh',
                bgcolor: 'white',
                borderColor: '#A81A11',
                paddingLeft: '5px',
                paddingRight: '5px',
                ":hover": {
                    bgcolor: '#ededed',
                    borderColor: '#A81A11',
                }
            }
        }
    }
};
export default styles;
