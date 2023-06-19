import React from "react";
import { makeStyles } from "@mui/material";

export const mainPanelStyles = {
    FileManagerNavBar: {
        BreadcrumbComponent: {
            TextField: {
                width: '4rem',
            },
            menuItem: {
                fontFamily: 'Yekan Bakh'
            },
            link: {
                fontFamily: 'Yekan Bakh',
                marginLeft: '1rem'
            },
            typography: {
                fontFamily: 'Yekan Bakh'
            },
        },
        ViewButtonsCumponent: {
            conditionalDeleteButton: {
                deleteIcon: {
                    color: 'black',
                    fontFamily: 'Yekan Bakh',
                    borderColor: 'black',
                    paddingRight: '0px',
                    paddingLeft: '0px',
                    ":hover": {
                        bgcolor: '#e6e6e6',
                        borderColor: 'black'
                    },
                },
                icon: {
                    color: 'black',
                    width: '2rem',
                }
            },
            selectAllButton: {
                Button: {
                    color: 'black',
                    fontFamily: 'Yekan Bakh',
                    borderColor: 'black',
                    ":hover": {
                        bgcolor: '#e6e6e6',
                        borderColor: 'black'
                    }
                },
                icon: {
                    color: 'black',
                    width: '1rem',
                    marginLeft: '0.7rem'
                }
            },
            refreshButton: {
                color: 'black',
                borderColor: 'black',
                paddingLeft: '0px',
                paddingRight: '0px'
            },
            itemFileManager: {
                toggleButtonSection: {
                    toggleButton: {
                        padding: '0px',
                        height: 'auto',
                        paddingRight: '0.8rem',
                        paddingLeft: '0.8rem',
                        color: 'black',
                        fontFamily: 'Yekan Bakh',
                    },
                    icon: {
                        width: '1rem',
                    }
                },

            },
            ItemToggleButton: {
                toggleButtonSection: {
                    toggleButton: {
                        padding: '0.3rem',
                        height: 'auto',
                        color: 'black',
                        fontFamily: 'Yekan Bakh',
                        fontSize: '1rem',
                    },
                    icon: {
                        width: '1rem',
                    }
                },

            },
            activeItemToggleButton: {
                toggleButtonSection: {
                    toggleButton: {
                        padding: '0.3rem',
                        height: 'auto',
                        color: 'white',
                        fontFamily: 'Yekan Bakh',
                        fontSize: '1rem',
                        bgcolor: 'black'
                    },
                    icon: {
                        width: '1rem',
                    }
                },

            },
            arrayDeleteModal: {
                modal: {
                    fontSize: '70px',
                    color: 'orange',
                },
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
                    }
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
                }
            }
        }
    },
    fileManagerPanel: {
        itemFileManager: {
            folderItem: {
                icon: {
                    fontSize: '5rem',
                    color: '#525151',
                }
            },
            fileItem: {
                form: {
                    marginRight: '0px',
                    marginLeft: '0px',
                },
                control: {
                    paddingRight: '0px',
                    padding: '0px',
                    paddingBottom: '5px',
                    paddingLeft: '10px'
                },
                label: {
                    fontSize: '0.8rem',
                    fontFamily: 'Yekan Bakh'
                }
            }
        },
        newPreviewComponent: {
            buttonArea: {
                Button: {
                    color: 'black',
                    borderColor: 'black',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    justifyContent: 'end'
                },
                icon: {
                    width: '1rem'
                }
            },
            nonePreview: {
                fontSize: '150px',
                color: '#525151'
            },
            FolderPreview: {
                grid: {
                    box: {
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center'
                    },
                    icon: {
                        fontSize: '150px'
                    }
                },
                buttons: {
                    changeName: {
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
                    },
                    changeNameIcon: {
                        width: '1rem',
                        marginLeft: '0.7rem'
                    },
                    delete: {
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
                    },
                    deleteIcon: {
                        width: '1rem',
                        marginLeft: '0.7rem'
                    }
                },
                renameModal: {
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
                        }
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
                    }
                }
            }
        }
    },
    fileTree: {
        treeItem: {
            paddingTop: '4px',
            marginRight: '2rem',
        },
        icon: {
            marginLeft: '2rem'
        },
        treeView: {
            height: 240,
            flexGrow: 1,
            maxWidth: 400,
            overflowY: 'auto',
            fontFamily: 'Yekan Bakh'
        }
    },


    modal: {
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
    },
}