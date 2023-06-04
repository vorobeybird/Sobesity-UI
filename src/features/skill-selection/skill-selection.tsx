import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import axios from 'axios';
import classNames from 'classnames';
import React from 'react';
import { useState, useEffect } from 'react';
import python from './python.png';
import javascript from './javascript.svg';
import java from './java.svg';
import kotlin from './kotlin.svg';
import ruby from './ruby.svg';
import html from './html.svg';
import Modal from '@/components/modal';
import { Link, useNavigate } from 'react-router-dom';

type User = {
  id: number;
  name: string;
};

const SkillSelection = () => {
  const [searchInput, setInput] = useState<string>('');
  const [spanBlocks, setSpanBlocks] = useState<number[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    setInput(event.currentTarget.value);
  };

  const navigate = useNavigate();

  const blocks = [
    { id: 0, name: 'Python', img: python },
    { id: 1, name: 'Kotlin', img: kotlin },
    { id: 2, name: 'JavaScript', img: javascript },
    { id: 3, name: 'HTML', img: html },
    { id: 4, name: 'Ruby', img: ruby },
    { id: 5, name: 'Java', img: java },
  ];

  const applyGridSpan = (blocks: any): number[] => {
    const arr = [];
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i + 1].id % 3 === 0) {
        arr.push(blocks[i].id, blocks[i + 1].id);
        i = (i + 1) * 2;
      }
    }
    return arr;
  };

  const onClickSkill = (selectedSkill: number) => {
    setSelectedSkill(selectedSkill);
  };

  const onStartClick = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const blocksSpan = applyGridSpan(blocks);
    setSpanBlocks(blocksSpan);
  }, []);

  return (
    <div className="flex flex-col justify-top items-left gap-4">
      <div>{searchInput}</div>
      <h2 className="h2">
        Choose in which direction you want to start the practice.
      </h2>
      <Input
        onChange={(event) => onInput(event)}
        containerStyles="w-96 h-8"
      ></Input>
      <div className="grid grid-cols-4 gap-4 w-full self-center ">
        {blocks.map((block, i) => (
          <div
            onClick={() =>
              console.log(block.id === selectedSkill, block, selectedSkill)
            }
            className={classNames('bg-black-light h-[150px]', {
              'col-span-2': spanBlocks.includes(block.id),
            })}
          >
            <Button
              variant="primary"
              onClick={() => onClickSkill(block.id)}
              type="button"
              title="skill"
            >
              <div
                className={`flex h-full p-5 items-end justify-left ${
                  block.id == selectedSkill &&
                  'border-solid border-2 border-primary-light'
                }`}
              >
                <div className="p-4">{block.name}</div>
                <img src={block.img} alt={block.name} className="w-10 h-10" />
              </div>
            </Button>
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        containerStyle="w-32 h-12 bg-primary-light self-end"
        type="button"
        title="start"
        onClick={onStartClick}
      >
        Start
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className=" w-[500px] h-[350px] bg-black-light flex flex-col gap-4">
          <div className="p-10 h-full flex flex-col gap-4">
            <Button
              variant="secondary"
              type="button"
              onClick={() => navigate(`/quiz/${'Python'}/junior`)}
            >
              Junior
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={() => navigate(`/quiz/${'Python'}/middle`)}
            >
              Medium
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={() => navigate(`/quiz/${'Python'}/senior`)}
            >
              Hard
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(SkillSelection);
