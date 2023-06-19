import React, { Component } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MultiSpeedTable from './MultiSpeedTable';
import SingleSpeedTable from './SingleSpeedTable';
import { DefaultGetAPICall } from '../../../../../../API/DefaultGetAPICall';
import { connect } from 'react-redux';
import { setCustomerQuantityInput, setPrintingProcessTime } from '../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({
    customerQuantityInput: state.RegularOrder.customerQuantityInput,
    printingProcessTime: state.RegularOrder.printingProcessTime,
    circulationId: state.RegularOrder.circulationId,
});
const mapDispatchToProps = { setCustomerQuantityInput, setPrintingProcessTime };

class TimingTable extends Component {

    processTimeAPIHandler = () => {
        DefaultGetAPICall('/api/fa/Nas/Product/GetPrintingProcessTime?', `&Id=${this.props.circulationId && this.props.circulationId}`).then((response) => this.props.setPrintingProcessTime(response));
    }

    componentDidMount() {
        this.processTimeAPIHandler();
    }

    componentDidUpdate(prevProps) {
        if (this.props.customerQuantityInput !== prevProps.customerQuantityInput) {
            this.processTimeAPIHandler();
        }
    }

    render() {
        const SampleText = `مقدار زمان آماده شدن سفارش شما با توجه به گزینه های انتخاب شده برابر است با ${this.props.printingProcessTime[0] ?
            this.props.printingProcessTime[0].printingSideProductFeature[0].processHours / 24
            : null
            } روز کاری`
        return (
            <div className='pb-4' dir='rtl'>
                <Accordion sx={{
                    backgroundColor: '#e0ded7'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"

                    >
                        <Typography sx={{
                            fontFamily: 'Yekan Bakh'
                        }} >{SampleText}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {this.props.printingProcessTime[0] ?
                            this.props.printingProcessTime[0].printingSideProductFeature.length > 1 ?
                                <MultiSpeedTable timingObject={this.props.printingProcessTime} /> :
                                <SingleSpeedTable timingObject={this.props.printingProcessTime} />
                            : null
                        }
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimingTable);
