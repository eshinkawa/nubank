/**
 * @format
 */

import 'react-native';
import React from 'react';
import UserAccount from '../js/views/UserAccount/components/userAccount';
import mockData from '../mocks/mock';

import {render, waitForElement} from 'react-native-testing-library';
import OfferComp from '../js/views/Offer/components/offer';

describe('UserAccount', () => {
  const mockProps = {
    navigation: {navigate: jest.fn()},
  };

  it('renders ActivityIndicator is loading is true', () => {
    const {queryByTestId} = render(
      <UserAccount
        data={mockData}
        navigate={mockProps.navigation.navigate}
        loading={true}
      />,
    );
    const component = queryByTestId('SpinnerUserAccount');
    expect(component.props.testID).toBe('SpinnerUserAccount');
  });

  it('renders List is loading is false', async () => {
    const modifiedApiMock = Object.assign({}, mockData.data);
    modifiedApiMock.viewer.offers = mockData.data.viewer.offers.filter(
      (item, index) => index < 2,
    );

    const {queryByTestId} = render(
      <UserAccount
        data={mockData.data}
        navigate={mockProps.navigation.navigate}
        loading={false}
      />,
    );
    const component = queryByTestId('Offers');
    expect(component.props.children).toHaveLength(2);
  });

  it('renders error text when fetching data gone wrong', async () => {
    const {queryByTestId} = render(
      <UserAccount
        data={mockData.data}
        navigate={mockProps.navigation.navigate}
        loading={false}
        error={true}
      />,
    );
    const component = queryByTestId('ErrorUserAccount');
    expect(component.props.testID).toBe('ErrorUserAccount');
  });

  it('render correct currency format on user balance', async () => {
    const wrapper = render(
      <UserAccount
        data={mockData.data}
        navigate={mockProps.navigation.navigate}
        loading={false}
        error={true}
      />,
    );
    await waitForElement(() => wrapper.getByText('R$ 9.000.000,00'));
  });
});

describe('Offer', () => {
  const obj = {
    item: mockData.data.viewer.offers[0],
    balance: 1000000,
    modal: false,
    setModal: jest.fn(),
    purchase: jest.fn(),
    navigateToAccount: jest.fn(),
    mutationLoading: false,
    client: jest.fn(),
  };

  it('renders insuficcient funds text if price > balance', async () => {
    obj.balance = 200;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferInsufficientFundsText');
    expect(component.props.testID).toBe('OfferInsufficientFundsText');
  });

  it('doesnt render insuficcient funds text if price = balance', async () => {
    obj.balance = mockData.data.viewer.offers[0].price;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferInsufficientFundsText');
    expect(component).toBeNull();
  });

  it('renders Purchase Button with proper presentation if price > balance', async () => {
    obj.balance = 200;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferPurchaseButton');
    expect(component.props.style.opacity).toBe(0.3);
  });

  it('renders Purchase Button with proper presentation if price < balance', async () => {
    obj.balance = 12323232200;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferPurchaseButton');
    expect(component.props.style.opacity).toBe(1);
  });

  it('renders Purchase Button with proper presentation if price = balance', async () => {
    obj.balance = mockData.data.viewer.offers[0].price;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferPurchaseButton');
    expect(component.props.style.opacity).toBe(1);
  });

  it('renders modal', async () => {
    obj.modal = true;
    // render(<OfferComp {...obj}/>).debug();
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferModal');
    expect(component.props.testID).toBe('OfferModal');
  });

  it('doesnt render modal if state is false', async () => {
    obj.modal = false;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferModal');
    expect(component).toBeNull();
  });

  it('renders Spinner if loading is true', async () => {
    obj.modal = true;
    obj.mutationLoading = true;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferPurchaseButtonSpinner');
    expect(component.props.testID).toBe('OfferPurchaseButtonSpinner');
  });

  it('doesnt render Spinner if loading is false', async () => {
    obj.modal = true;
    obj.mutationLoading = false;
    const {queryByTestId} = render(<OfferComp {...obj} />);
    const component = queryByTestId('OfferPurchaseButtonSpinner');
    expect(component).toBeNull();
  });
});
