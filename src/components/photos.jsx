import React from "react";
import "../App.css";

class Photos extends React.Component {
    constructor() {
        super()
        this.state = {
            picCounter: 0,
            photos: ["https://lh3.googleusercontent.com/BuLGYu7mE6Ke2HsUnUGFncROpSz_5z5OAtZc0PDCXFktUpATyO5XaIkQkN1U7pShXN6u6bSia8TA8PFVdus4oLN2dgRna6xsI4ELVt4XZsEoJQpuawSEspZna4IA2DkVNKHWsD8m4g=w2400",
                "https://lh3.googleusercontent.com/q44AmL7YJpvMP3Hww5uFa6fpA2RuQhYqFuDyneiHAGNdXk5aHFpCeRQdsopUz8Gj3y2_eHgjcSj2hopdZLVSgo4ImeRwZVpLaSWhKH6aEBCQBuv0TcfPB4Y2blMrksbl1SPoDvbgwQ=w2400",
                "https://lh3.googleusercontent.com/CX_UmpkEwOPCDOa1Xf-LZTsxjfGoAuxCb3TuzlrL6nfWQJQ1-KeXRHdTLX8W742BgzCXHZ2eHA93zWJ1GgXDx1NnY7qle284Tu1gecGk6nohBe1ZqpEkmXjrQVMgkzr1wI4mxvA_QA=w2400",
                "https://lh3.googleusercontent.com/J3pluv0fpvpHjM3VpCUo7vmd1bBNuV31hutfpIJLfh4HarlOWSouN19n8l37Jer6_jRKV-VH3vq23leiGd57Z2plJMcGWeh-KdloIuFWJRaiDjSsm7WJ07y0Dz-naS13q7l_YTR6Iw=w2400",
                "https://lh3.googleusercontent.com/VEF-BXQcpnFUvMQKZPZ9X_9xOpf-yG8qkyix5RpE9E6iR0uagT2NJ3dOli9WF5j-yFS9AEOdUaXHxIIBJnELAdXhpFJOPuNV1oPL8TuRdVqJ63c5yirZEAR03kdcpqxRaylUZZWLTQ=w2400",
                "https://lh3.googleusercontent.com/h4JrmfujZXKqPc84GNaBws198-4zebe3a21v80WMeigyAU260PsNp3YXSo_bhCulnB6GrJtuMY1xJW7ViFYOmAfjfi7iLXCNPjHQPO6oVXuR8V9UFJLiWXjycavL0NOGrIm371x5EQ=w2400",
                "https://lh3.googleusercontent.com/HCGHhnVFLBX8G4E0OzJZ1UmOXK8xgoYpm9zjVwojIsr9PlKnq8Dtd0vG6tUgL1vedWGipb39lxkh-ab1I1wLio7gy2U4ajkV5Z1wVU9XiTFfnzrIrnv5O6BMcBlK49BEeufo0KTYGQ=w2400",
                "https://lh3.googleusercontent.com/gxT_DmsWLeS-j0rNlmtRPuFwzSE9fkTWwp3vdtBrDAEBWw-xQLSpeNEon-EIPS-FC577VsKGMSZ0ssKZHaIZrZHS5IspYfHd1Z6j83Zy4B_ADEj8oc_5RnHyOBZeO499McBgHUGMXg=w2400",
                "https://lh3.googleusercontent.com/fiZyxsLU9fTIFwgx_ki9XiljopYMFt51x7we6gYq8d-FzVQbJgj34Pf-g4n9HKXrEDHaPwPM7K4Ks2qFry8OxWMRfbtlFlRG88ueBKN0mfQvY1Tyqr4ZXbpmdyCOe-nqilXzOBFOuw=w2400",
                "https://lh3.googleusercontent.com/gYM7qnTaEHq6mWPDS-1SwA_ApMpggXc-oozimuDNxmd7MkajjEUJpI_aO0rOek5URJabfN3SnuV5D6CvA20vUAgTH9byjnvh93gpEfHtnMUAodzjKHfnOqcBVnK4YduUledjYS3dcQ=w2400",
                "https://lh3.googleusercontent.com/Ll2268nG9gYzkcf5YFnnjZHXRl8TQ-QBqGqcns1XZ5HoShKeBd7ro4i302ohIt1LNz4_Nn1Hni9oCMa2U5SFUAZkExcuKHO1vu5ReHm2-OvwH-KF4tieFXOIapXMsOl07b1WAzyxzA=w2400",
                "https://lh3.googleusercontent.com/mLOTeT-T2RNHMNQPJS2ylue78dFOWJGVAQJ9Fu0e9BJySbwwaDtI_OFYuRKTnwucPZK5zpX5EtfzwmZurjxsAXIEk934xjnCX7tpRQfRdQoKO_2ri5dEW7dUQEbAgpVc2nIdDM9lFw=w2400",
                "https://lh3.googleusercontent.com/rm4pE09Bwj7VJHkpEq84wjNF92dnPCvmbK7aZmnhLEsbxeWGhH4C0CxcqBwTp4SioA2AlexcyJ-P4HusdDVfd20wXVZHYw1Kh8x39YarQNFzUFPl4oLO5JKouHXYvOgOn8schSHi_A=w2400",
                "https://lh3.googleusercontent.com/IIv0VLznRU1_V7lntDu1ZorQhcylTa0U-syH8_iDzyhYT_xJDnAO2CuU34d8-oArK0PWqCScEBkDO2wZ4POZlLXFcAxicbPDR42jzNLaHr6py3c2foI1zEUSseQDhzpVHiwEgXTvWw=w2400",
                "https://lh3.googleusercontent.com/ndY2o3U24PhYGp2sZ34enOgjtq4UuKTjF6pWA867lNUNODLexXNUyABB4dHlU9YuQSzEBJSdN6TW8QY-AwDdHCSbuHMAtuvRC-P6k1AxoIsh5aAlpBT69Uy0y4fDTmoKC6hl5DMrQQ=w2400",
                "https://lh3.googleusercontent.com/Vp8JB1YhrOdidKcqkrfDaj2-oTFBu7Z9yS_ewgqouk0-tilwTG_TOpbPRQT2Ev5VmFWviGYgRR_u9yAvP3O6j4lRLdEtpaAS9-o-816DfW73_zPknJi8O-85UEjIbysjHicoldOiDg=w2400"
            ]
        }
    }

    handleBack = (e) => {
        if (this.state.picCounter > 0) {
            this.setState({ picCounter: this.state.picCounter -= 1 })
        } else if (this.state.picCounter === 0) {
            this.setState({ picCounter: this.state.photos.length - 1 })
        }
    }


    handleNext = (e) => {
        if (this.state.picCounter < this.state.photos.length - 1) {
            this.setState({ picCounter: this.state.picCounter += 1 })
        } else if (this.state.picCounter === this.state.photos.length - 1) {
            this.setState({ picCounter: 0 })
        }
    }

    render() {
        return (
            <div className="pictureGallery container-fluid">
                <div>
                    <i onClick={this.handleBack} class="fa fa-chevron-circle-left iconLeft" aria-hidden="true"></i>
                    <img src={this.state.photos[this.state.picCounter]} className="picture" />
                    <i onClick={this.handleNext} class="fa fa-chevron-circle-right iconRight" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Photos;