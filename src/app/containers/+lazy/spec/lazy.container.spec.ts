import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { StoreModule } from '@ngrx/store'
import { StoreModuleImport } from 'base/imports'
import { expect } from 'chai'

import { LazyActions } from '../actions'
import { LazyContainer } from '../lazy.container'

describe('container: lazy', () => {
  let component: LazyContainer
  let fixture: ComponentFixture<LazyContainer>
  let de: DebugElement
  let el: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyContainer ],
      imports: [ StoreModuleImport ],
      providers: [ LazyActions ]
    }).compileComponents()

    fixture = TestBed.createComponent(LazyContainer)

    component = fixture.componentInstance

    de = fixture.debugElement
    el = de.nativeElement
  })

  afterEach(() => {
    TestBed.resetTestingModule()
  })

  describe('layout', () => {
    it('should render "Lazy Container"', () => {
      fixture.detectChanges()
      expect(el.querySelector('p').textContent).to.equal('Lazily loaded Container!')
    })
  })
})
