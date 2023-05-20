import { Dialog, Switch, Button } from "@kobalte/core";
import { createSignal } from "solid-js";
import { useStore } from '@nanostores/solid';
import { cookiesSetAtom, cookiePopupOpenAtom, performanceCookiesEnabledAtom, functionalCookiesEnabledAtom, marketingCookiesEnabledAtom } from '../../local-storage';
import "./style.scss";
import "./switch.scss";
import "./button.scss";

// TODO: Beim ESC Drücken eine Wackel-Animation wie bei Apple einbauen

export const CookieDialog = () => {
    console.log("A");
    const $dialogOpen = useStore(cookiePopupOpenAtom);

    console.log("B");
    const [performanceCookiesEnabled, setPerformanceCookiesEnabled] = createSignal(cookiesSetAtom.get() ? performanceCookiesEnabledAtom.get() : false);
    const [functionalCookiesEnabled, setFunctionalCookiesEnabled] = createSignal(cookiesSetAtom.get() ? functionalCookiesEnabledAtom.get() : false);
    const [marketingCookiesEnabled, setMarketingCookiesEnabled] = createSignal(cookiesSetAtom.get() ? marketingCookiesEnabledAtom.get() : false);

    console.log("C");
    const useCookies = () => {
        console.log("D");
        performanceCookiesEnabledAtom.set(performanceCookiesEnabled());
        functionalCookiesEnabledAtom.set(functionalCookiesEnabled());
        marketingCookiesEnabledAtom.set(marketingCookiesEnabled());

        console.log("E");
        cookiesSetAtom.set(true);
        cookiePopupOpenAtom.set(false);
    };

    return <Dialog.Root modal={true} open={$dialogOpen()}>
        <Dialog.Portal>
            <Dialog.Overlay class="dialog__overlay" />
            <div class="dialog__positioner">
                <Dialog.Content class="dialog__content">
                    <div class="dialog__header">
                        <Dialog.Title class="dialog__title">Cookies</Dialog.Title>
                    </div>
                    <Dialog.Description class="dialog__description">
                        Welcome to my website.
                        <br />
                        <br />
                        We use cookies to provide you with the best possible experience on our website.
                        You can decide for yourself which cookies you want to allow.
                        For more information, please see our <a href="https://lindnerit.io/privacy-policy" title="Privacy policy">Privacy Policy</a>.
                        <br />
                        <div class="cookie-type-selection">
                            <Switch.Root class="switch" checked={true} readOnly={true}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Required</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" checked={performanceCookiesEnabled()} onChange={setPerformanceCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Performance</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" checked={functionalCookiesEnabled()} onChange={setFunctionalCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Functional</Switch.Label>
                            </Switch.Root>
                            <Switch.Root class="switch" checked={marketingCookiesEnabled()} onChange={setMarketingCookiesEnabled}>
                                <Switch.Input class="switch__input" />
                                <Switch.Control class="switch__control">
                                    <Switch.Thumb class="switch__thumb" />
                                </Switch.Control>
                                <Switch.Label class="switch__label">Marketing</Switch.Label>
                            </Switch.Root>
                        </div>
                        <div class="cookie-button-group">
                            <Button.Root class="cookie-button" onClick={() => {
                                setPerformanceCookiesEnabled(true);
                                setFunctionalCookiesEnabled(true);
                                setMarketingCookiesEnabled(true);

                                setTimeout(useCookies, 300);
                            }}>Accept all</Button.Root>
                            <Button.Root class="cookie-button cookie-button--small" onClick={useCookies}>Accept selected</Button.Root>
                            <Button.Root class="cookie-button cookie-button--small" onClick={() => {
                                setPerformanceCookiesEnabled(false);
                                setFunctionalCookiesEnabled(false);
                                setMarketingCookiesEnabled(false);

                                setTimeout(useCookies, 300);
                            }}>Decline everything</Button.Root>
                        </div>
                        <br />
                        <div class="cookie-links">
                            <a href="https://lindnerit.io/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                            <a href="https://lindnerit.io/legal-details" title="Legal details">Legal details</a>
                        </div>
                    </Dialog.Description>
                </Dialog.Content>
            </div>
        </Dialog.Portal>
    </Dialog.Root>
};