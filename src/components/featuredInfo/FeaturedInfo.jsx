import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

 function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,414</span>
                    <span className="featuredMoneyRate">-11.1
                    <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Transactions</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,414</span>
                    <span className="featuredMoneyRate">+4.6
                    <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Payments</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,414</span>
                    <span className="featuredMoneyRate">-21.1
                    <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            
        </div>
    )
}
export default FeaturedInfo