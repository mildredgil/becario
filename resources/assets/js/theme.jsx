import * as colors from './colors';
import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.PRIMARY_COLOR
    }
  },

  overrides: {
    MuiMenuItem: {
      root: {
        height: '35px'
      }
    },

    MuiTab: {
      root: {
        fontFamily: 'Nunito'
      }
    },

    MuiFormControl: {
      root: {
        width: '100%'
      }
    },

    MuiFormLabel: {
      focused: {
        color: `${colors.FOCUSED_INPUT_COLOR} !important`
      }
    },

    MuiInputLabel: {
      root: {
        '&$outlined$shrink': {
          transform: 'translate(14px, -5px) scale(0.75)'
        }
      },

      outlined: {
        transform: 'translate(10px, 14px) scale(1)'
      }
    },

    MuiFormControlLabel: {
      root: {
        marginLeft: '0px',
        marginRight: '0px'
      }
    },

    MuiFormControl: {
      marginNormal: {
        marginTop: '5px',
        marginBottom: '15px'
      }
    },

    MuiCheckbox: {
      root: {
        paddingLeft: '0px',
        paddingTop: '0px'
      },

      "&$checked": {
        color: `${colors.PRIMARY_COLOR} !important`
      }
    },

    MuiOutlinedInput: {
      root : {
        height: '40px',
        background: '#fff',

        '&$focused $notchedOutline': {
          borderColor: `${colors.FOCUSED_INPUT_COLOR} !important`,
        },

        '& $notchedOutline': {
          borderRadius: '2px'
        },
      },

      input: {
        padding: '12px'
      }
    },

    MuiFilledInput: {
      input:{
        padding: "12px",
      },

      root: {
        backgroundColor: "#ffffff",
        borderRadius: "1px !Important",

        '&:hover': {
          backgroundColor: "#ffffff",
        },
        
        "&$focused": {
          backgroundColor: "#ffffff",
        }
      }, 
    },

    MuiDialog: {
      paper: {
        marginLeft: '20px',
        marginRight: '20px',
      },

      paperScrollPaper: {
        maxHeight: 'calc(100% - 80px)',
      }
    },

    MuiDialogContent: {
      root: {
        padding: '25px 20px',
        zIndex: 2,
        position: 'relative'
      }
    },

    MuiFormHelperText: {
      contained: {
        margin: '8px 0px 0px',
      }
    },

    MuiCircularProgress: {
      root: {
        position: 'absolute',
        zIndex: 2,
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },

      colorPrimary: {
        color: `${colors.PRIMARY_COLOR}`,
      }
    },

    MuiButton: {
      root: {
        borderRadius: '2px'
      },

      containedPrimary: {
        backgroundColor: `${colors.PRIMARY_COLOR}`,

        '&:hover': {
          backgroundColor: `${colors.BUTTON_HOVER_COLOR}`,
        }
      }
    }
  }
});