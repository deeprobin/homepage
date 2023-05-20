import "./style.scss";
import { Block } from "../Block/Block";

export const CompanyBlock = () => <Block
    class="company-block"
    comment="My company"
    title="Lindner IT"
    button="View website"
    href="https://lindnerit.io"
    rightContainer={<img src="/images/lindnerit.svg" alt="Lindner IT Branding" height="253" width="926" />}
>
    <p>
        Where Cutting-Edge Technology Meets a Deep Understanding of Your
        Business Needs.
    </p>
</Block>