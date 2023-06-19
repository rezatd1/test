export const headerStyles = {
    createAndUpload: {
        containedButton: {
            color: 'white',
            fontFamily: 'Yekan Bakh',
            bgcolor: 'black',
            borderColor: 'black',
            ":hover": {
                bgcolor: '#2e2e2e',
                borderColor: 'black'
            },
        },
        outlinededBgButton: {
            color: 'red',
            fontFamily: 'Yekan Bakh',
            bgcolor: 'tranparent',
            borderColor: 'red',
            ":hover": {
                bgcolor: 'light grey',
                borderColor: 'red'
            },
        },
        containedButtonBg: {
            color: 'white',
            fontFamily: 'Yekan Bakh',
            bgcolor: 'red',
            borderColor: 'red',
            ":hover": {
                bgcolor: 'white',
                borderColor: 'red',
                color: 'red'
            },
        },
        containedButtonIcon: {
            width: '1rem',
            marginLeft: '0.7rem'
        },
        containedButtonIcon2: {
            width: '1rem',
            marginRight: '0.7rem'
        },
        outlinedButton: {
            color: 'black',
            fontFamily: 'Yekan Bakh',
            borderColor: 'black',
            ":hover": {
                bgcolor: '#e6e6e6',
                borderColor: 'black'
            },
        },
        outlinedButtonIcon: {
            color: 'black',
            width: '1rem',
            marginLeft: '0.7rem'
        },
        createFolderModal: {
            box: {
                fontFamily: 'Yekan Bakh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                direction: 'rtl',
                padding: '0px',
                borderRadius: '5px',
                width: 'max-content',
            },
            typography: {
                fontFamily: 'yekan bakh',
                backgroundColor: '#bf0202',
                color: 'white',
                padding: '0.5rem 1rem 0.5rem'
            },
            containedButton: {
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
                },
            },
            outlinedButton: {
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
            },
            redBgButton: {
                color: '#white',
                fontFamily: 'Yekan Bakh',
                bgcolor: 'red',
                borderColor: '#A81A11',
                paddingLeft: '5px',
                paddingRight: '5px',
            }
        }
    },
    regularOrder: {
        mainPanel: {
            headerText: {
                fontSize: '1.2rem',
                paddingLeft: '0.2rem'
            },
        }
    },
    usedStorage: {
        typography: {
            fontFamily: 'Yekan Bakh',
            paddingLeft: '0rem',
        },
        icon: {
            width: '1.5rem',
            marginLeft: '0.7rem',
        }
    },
    fileUpload: {
        opacity: '0',
        width: '0',
        height: '0',
        position: 'absolute',
        top: '-100px'
    },
    saveDraft: {
        containedButton: {
            color: 'white',
            fontFamily: 'Yekan Bakh',
            bgcolor: '#A81A11',
            borderColor: '#A81A11',
            ":hover": {
                bgcolor: '#2e2e2e',
                borderColor: 'red'
            },
        },
        containedButton2: {
            color: 'red',
            fontFamily: 'Yekan Bakh',
            bgcolor: 'white',
            borderColor: 'red',
            ":hover": {
                bgcolor: '#2e2e2e',
                borderColor: 'red'
            },
        },
    }
}