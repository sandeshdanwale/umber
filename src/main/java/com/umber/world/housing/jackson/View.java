package com.umber.world.housing.jackson;

public class View {

	private View() {}
	public interface Render {}
	public interface History extends Render {}
	public interface Details extends History {}

}
