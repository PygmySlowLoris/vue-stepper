import { mount, shallow } from "@vue/test-utils";
import VueTestUtils from "@vue/test-utils";
import Vue from "vue";
import HorizontalStepper from "../src/HorizontalStepper";
import StepOne from './StepOne'
import StepTwo from './StepTwo'

VueTestUtils.config.stubs.transition = false;

describe("HorizontalStepper.spec.js", () => {
  let cmp;

  beforeEach( ()=> {
    cmp = mount(HorizontalStepper, {
      propsData: {
        steps: [
          {
            icon: "mail",
            name: "first",
            title: "Sample title 1",
            subtitle: "Subtitle sample",
            component: StepOne,
            completed: false
          },
          {
            icon: "mail",
            name: "second",
            title: "Sample title 1",
            subtitle: "Subtitle sample",
            component: StepTwo,
            completed: false
          }
        ]
      }
    });
  })

  test("keep alive component steppers", () => {
    cmp = shallow(HorizontalStepper);
    expect(cmp.props().keepAlive).toBeTruthy();
  });

  test("first step rendered", () => {
    let stepHeader = cmp.find(".content h1");
    expect(stepHeader.text()).toBe("Step One");
  });

  test("first step can continue and continues", () => {
    let stepButton = cmp.find(".content button");
    stepButton.trigger('click');
    expect(cmp.vm.canContinue).toBeTruthy();

    let nextButton = cmp.find('.stepper-button.next');
    nextButton.trigger('click');
    expect(cmp.vm.previousStep.index).toBe(0);
    expect(cmp.vm.currentStep.index).toBe(1);
  });

  test("last step and click finish button", () => {
    let stepButton = cmp.find(".content button");
    stepButton.trigger('click');
    let nextButton = cmp.find('.stepper-button.next');
    nextButton.trigger('click');

    expect(cmp.vm.finalStep).toBeTruthy();
    expect(cmp.emitted('stepper-finished'));
    
    let finishButton = cmp.find('.stepper-button.next');
    let fbSpan = finishButton.find('span');

    expect(fbSpan.text()).toBe('Finish')
  })
});
