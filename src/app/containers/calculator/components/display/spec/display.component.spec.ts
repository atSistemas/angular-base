import { Location } from '@angular/common'
import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { StoreModuleImport } from 'base/imports'
import { expect } from 'chai'
import { spy } from 'sinon'

import { CalculatorActions } from '../../../actions'
import { DisplayComponent } from '../display.component'

const actions = new CalculatorActions()

describe('Calculator: component: button', () => {
  let component: DisplayComponent
  let fixture: ComponentFixture<DisplayComponent>
  let de: DebugElement
  let el: HTMLElement
  let store: Store<any>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      imports: [StoreModuleImport],
      providers: [CalculatorActions]
    }).compileComponents()

    fixture = TestBed.createComponent(DisplayComponent)
    fixture.detectChanges()

    component = fixture.componentInstance
    de = fixture.debugElement
    el = fixture.nativeElement

    store = de.injector.get(Store)
  })

  afterEach(() => {
    getTestBed().resetTestingModule()
  })

  it('should display "0" initially', async () => {
    const display = de.query(By.css('.classDisplay'))
    expect(display.nativeElement.textContent).to.equal('0')
  })

  it('should change display on number input', async () => {
    const display = de.query(By.css('.classDisplay'))

    store.dispatch(actions.inputNumber(1))
    fixture.detectChanges()
    expect(display.nativeElement.textContent).to.equal('1')

    store.dispatch(actions.inputNumber(2))
    fixture.detectChanges()
    expect(display.nativeElement.textContent).to.equal('12')
  })
})
