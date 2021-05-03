import { shallowMount } from "@vue/test-utils";
import UIButton from "@/ui/Button.vue";

describe("UIButton.vue", () => {
	it("renders props.msg when passed", () => {
		const msg = "new message";
		const wrapper = shallowMount(UIButton, {
			props: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
