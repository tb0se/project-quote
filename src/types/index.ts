import { Component } from 'solid-js';

export type Step = {
	title: string;
	subTitle: string;
	component: Component;
};

export type Option = {
	id: string;
	label: string;
	value: string;
	icon?: string;
};
