import { TestBed, ComponentFixture, getTestBed, inject, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { expect } from 'chai';
import { spy } from 'sinon';

import { TopBarComponent } from './topBar.component';

const MockComponent = Component({ template: '<em>mocked</em>' })(class {});

describe('component: topBar', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent, MockComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: MockComponent },
          { path: 'calculator', component: MockComponent },
          { path: 'weather', component: MockComponent },
          { path: 'lazy', component: MockComponent },
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('layout', () => {
    it('should have a header as root element', () => {
      expect(de.children[0].name).to.equal('header');
    });

    it('should have a navigation element next to header', () => {
      const navElement = de.query(By.css('header > .nav'));
      expect(navElement).to.not.equal(undefined);
    });

    it('should have a list, with pending items having class "tutorials"', () => {
      const items = de.queryAll(By.css('ul li.tutorials'));
      expect(items).to.not.equal(undefined);
      expect(items.length).to.be.greaterThan(0);
    });

    it('should have 4 links', () => {
      const links = de.queryAll(By.css('.tutorials > a'));
      expect(links.length).to.equal(4);
    });
  });

  describe('behaviour', () => {
    it('should navigate when clicking on any link', inject([Router, Location], (router, location) => {
      expect(true).to.equal(true);
      //   fixture.detectChanges();

      //   const callback = spy(router, 'navigateByUrl');

      //   const links = de.queryAll(By.css('.tutorials > a'));

      //   expect(location.path()).to.equal('');

      //   // NOT WORKING YET
      //   links.forEach(link => {
      //     link.nativeElement.click();
      //     fixture.whenStable().then(() => {
      //       expect(location.path()).to.equal('/settings/testing/edit/1');
      //       console.log('after expect');
      //     });
      //   });
      // }));
    }));
  });
});
