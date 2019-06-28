import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MainButton from "../../../atoms/Button";

configure({ adapter: new Adapter() });

describe("<MainButton/>", () => {
  it("renders <MainButton /> component", () => {
    const wrapper = shallow(<MainButton />);
    // expect(wrapper.find(MainButton)).to.have.lengthOf(1);
    expect(wrapper).toEqual({});
  });
});
