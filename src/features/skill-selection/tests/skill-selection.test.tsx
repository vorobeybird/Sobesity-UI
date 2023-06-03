import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SkillSelection from '../skill-selection';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App', () => {
  test('should render', () => {
    render(<SkillSelection />);
    const helloWorldElement = screen.getByText(/Skill Selection/i);
    // const btn = screen.getByRole('button');
    // const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    // expect(btn).toBeInTheDocument();
    // expect(input).toBeInTheDocument();
  });

  // test('api result', async () => {
  //   render(<SkillSelection />);
  //   const hlElem = screen.queryByText(/Screen Sdfction/i);
  //   expect(hlElem).toBeNull();

  //   const secondHello = await screen.findByText(/data/i);
  //   expect(secondHello).toBeInTheDocument();
  // });

  // test('click event', async () => {
  //   render(<SkillSelection />);

  //   const toggleButton = screen.getByTestId('toggle-button');
  //   expect(screen.queryByTestId('toggle-element')).toBeNull();
  //   fireEvent.click(toggleButton);
  //   expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
  //   fireEvent.click(toggleButton);
  //   expect(screen.queryByTestId('toggle-element')).toBeNull();
  // });

  // test('input event', async () => {
  //   render(<SkillSelection />);

  //   const input = screen.getByPlaceholderText(/input value/i);
  //   expect(screen.queryByTestId('input-value-element')).toContainHTML('');
  //   // fireEvent.input(input, { target: { value: 'test 12445' } });
  //   userEvent.type(input, 'test 12445'); // close to userLogic
  //   expect(screen.queryByTestId('input-value-element')).toContainHTML(
  //     'test 12445',
  //   );
  // });

  // test('renders learn react link', async () => {
  //   mockedAxios.get.mockResolvedValue({
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Joe Doe',
  //       },
  //       {
  //         id: 2,
  //         name: 'Jane Doe',
  //       },
  //     ],
  //   });
  //   const renderComponent = () => render(<SkillSelection />);
  //   const { getByText, getAllByRole } = renderComponent();

  //   // Provide the data object to be returned

  //   // fireEvent.click(getByText('Get users'));

  //   await waitFor(() => {
  //     const userList = getAllByRole('listitem');
  //     expect(userList).toHaveLength(2);
  //     expect(userList[0]).toHaveTextContent('Joe Doe');
  //     expect(userList[1]).toHaveTextContent('Jane Doe');
  //   });
  // });
});
